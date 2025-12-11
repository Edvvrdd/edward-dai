/**
 * Rotating Text Controller
 * 
 * A robust, accessible rotating text implementation that:
 * - Cycles through text items with a configurable interval
 * - Respects user's motion preferences
 * - Pauses on user interaction (hover/focus)
 * - Pauses when page is hidden
 * - Includes proper ARIA attributes for screen readers
 */

(function() {
  'use strict';

  // Configuration
  const intervalTime = 3000; // milliseconds between rotations

  // State
  let currentIndex = 0;
  let rotationInterval = null;
  let isPaused = false;

  // DOM Elements
  let wrapper = null;
  let textElements = null;

  /**
   * Initialize the rotating text functionality
   */
  function init() {
    // Select DOM elements
    wrapper = document.querySelector('.rotating-text-wrapper');
    
    // Exit gracefully if wrapper doesn't exist
    if (!wrapper) {
      return;
    }

    textElements = document.querySelectorAll('.rotating-text');

    // Exit gracefully if no text elements
    if (!textElements || textElements.length === 0) {
      return;
    }

    // Add accessibility attributes to wrapper
    wrapper.setAttribute('aria-live', 'polite');
    wrapper.setAttribute('role', 'status');

    // If only one item, just show it and don't rotate
    if (textElements.length < 2) {
      textElements[0].classList.add('active');
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Show only the first item, don't rotate
      textElements[0].classList.add('active');
      return;
    }

    // Find the initially active element or default to first
    currentIndex = 0;
    for (let i = 0; i < textElements.length; i++) {
      if (textElements[i].classList.contains('active')) {
        currentIndex = i;
        break;
      }
    }

    // If no element is active, activate the first one
    if (!textElements[currentIndex].classList.contains('active')) {
      textElements[currentIndex].classList.add('active');
    }

    // Set up event listeners
    setupEventListeners();

    // Start rotation
    startRotation();
  }

  /**
   * Set up event listeners for pause/resume functionality
   */
  function setupEventListeners() {
    // Pause on mouse enter
    wrapper.addEventListener('mouseenter', pauseRotation);
    
    // Resume on mouse leave
    wrapper.addEventListener('mouseleave', resumeRotation);
    
    // Pause on focus (for keyboard navigation)
    wrapper.addEventListener('focusin', pauseRotation);
    
    // Resume when focus leaves
    wrapper.addEventListener('focusout', resumeRotation);

    // Handle page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  /**
   * Start the rotation interval
   */
  function startRotation() {
    if (rotationInterval) {
      return; // Already running
    }

    rotationInterval = setInterval(rotate, intervalTime);
  }

  /**
   * Stop the rotation interval
   */
  function stopRotation() {
    if (rotationInterval) {
      clearInterval(rotationInterval);
      rotationInterval = null;
    }
  }

  /**
   * Pause rotation (but keep interval reference for resume)
   */
  function pauseRotation() {
    isPaused = true;
    stopRotation();
  }

  /**
   * Resume rotation if not already running
   */
  function resumeRotation() {
    isPaused = false;
    
    // Only resume if page is visible
    if (!document.hidden) {
      startRotation();
    }
  }

  /**
   * Handle page visibility changes
   */
  function handleVisibilityChange() {
    if (document.hidden) {
      // Page is hidden, pause rotation
      stopRotation();
    } else if (!isPaused) {
      // Page is visible and not manually paused, resume rotation
      startRotation();
    }
  }

  /**
   * Rotate to the next text element
   */
  function rotate() {
    // Remove active class from current element
    textElements[currentIndex].classList.remove('active');

    // Move to next index (loop back to start if at end)
    currentIndex = (currentIndex + 1) % textElements.length;

    // Add active class to new element
    textElements[currentIndex].classList.add('active');
  }

  /**
   * Cleanup function to remove event listeners and clear intervals
   */
  function cleanup() {
    stopRotation();
    
    if (wrapper) {
      wrapper.removeEventListener('mouseenter', pauseRotation);
      wrapper.removeEventListener('mouseleave', resumeRotation);
      wrapper.removeEventListener('focusin', pauseRotation);
      wrapper.removeEventListener('focusout', resumeRotation);
    }
    
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM is already ready
    init();
  }

  // Cleanup on page unload
  window.addEventListener('beforeunload', cleanup);

})();
