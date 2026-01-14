# Not Raised By Wolves: Redesigning a VFS Legacy Game

**Date:** January 14, 2026
**Category:** Game Audio, Capstone Project, Audio Implementation

## Introduction

As my capstone project at Vancouver Film School, I took on the challenge of completely redesigning the audio for *Not Raised By Wolves*, a legacy VFS game project. This wasn't just about replacing old sounds—it was an opportunity to reimagine the entire audio experience from the ground up, adding new features, implementing advanced audio systems, and breathing new life into an existing game world. This project represents the culmination of everything I've learned about technical sound design, audio middleware, and the art of creating immersive interactive soundscapes.

## The Project: A Complete Audio Overhaul

*Not Raised By Wolves* is an action-adventure game that had previously been developed by VFS students but lacked a cohesive audio vision. My task was two-fold: first, to completely re-implement all existing audio with higher quality assets and better technical implementation; and second, to add new audio features that would elevate the player experience to a professional standard.

The scope of this project was ambitious. I needed to:
- Design and implement all sound effects from scratch
- Create an adaptive music system that responds to gameplay
- Build interactive audio systems for player actions and environmental responses
- Implement spatial audio for immersive 3D positioning
- Add new audio features that weren't in the original design

## Technical Implementation: Building Modern Audio Systems

### Audio Middleware Integration

For this project, I chose to work with FMOD Studio as my primary audio middleware, integrating it deeply with the game engine. This allowed me to create complex, parameter-driven audio events that could respond dynamically to gameplay. Every sound in the game is now controlled through FMOD, giving me precise control over mixing, DSP effects, and real-time audio behavior.

### Adaptive Music System

One of the major additions I made was a fully adaptive music system. Rather than simple loops, the music in *Not Raised By Wolves* now transitions seamlessly between different intensity levels based on:
- Combat state (exploration, awareness, combat, victory)
- Player health status
- Environmental context
- Story progression

I implemented this using FMOD's parameter system, creating vertical remixing layers that blend in and out smoothly, along with horizontal re-sequencing for major transitions. The result is a musical score that feels responsive and enhances the emotional arc of gameplay.

### Environmental Audio Design

The game world needed to feel alive through sound. I implemented:
- **Dynamic ambience systems** that change based on time of day and location
- **Weather audio** with layered wind, rain, and thunder systems
- **Reverb zones** that accurately reflect different environmental spaces
- **3D spatial audio** for precise sound positioning and realistic attenuation

### Interactive Sound Design

Every player action now has responsive audio feedback. I focused on creating satisfying, punchy sounds for:
- **Combat mechanics** - weapon swings, impacts, and special abilities
- **Movement** - footsteps with surface detection and dynamic mixing
- **UI elements** - clear, distinctive audio for menus and notifications
- **Environmental interactions** - doors, switches, destructible objects

## New Features: Going Beyond the Original

Beyond replacing existing audio, I added several new features that weren't in the original game:

### Dynamic Dialogue System
I implemented a context-aware dialogue system that can trigger different NPC reactions based on player state, quest progress, and previous interactions. This adds depth to the world and makes it feel more reactive.

### Audio-Driven Gameplay Mechanics
I introduced audio cues that help with navigation and puzzle-solving, using sound design to guide players without explicit UI markers. Subtle audio breadcrumbs lead players through the environment naturally.

### Advanced Combat Audio
Building on basic combat sounds, I created an audio system that provides clear feedback about enemy types, attack patterns, and threat levels through distinct audio signatures. Players can learn to "read" combat situations through sound alone.

## Challenges and Solutions

### Challenge: Working with Existing Code
Integrating modern audio systems into a legacy codebase presented unique challenges. The original game wasn't designed with advanced audio in mind.

**Solution:** I worked closely with programmers to create custom audio callback systems and ensured clean integration points for FMOD. This required learning the existing architecture and proposing solutions that wouldn't break existing systems.

### Challenge: Maintaining Performance
With so many dynamic audio systems running simultaneously, performance optimization was crucial.

**Solution:** I implemented aggressive audio culling, smart prioritization systems, and optimized DSP usage. I profiled audio performance constantly and made trade-offs between quality and efficiency where necessary.

### Challenge: Creating Cohesive Sound Design
With complete creative freedom came the challenge of maintaining a consistent audio aesthetic across all game systems.

**Solution:** I created a comprehensive audio style guide and built reusable sound libraries organized by category. Every sound was designed to fit within the established sonic palette while serving its functional purpose.

## Lessons Learned

This capstone project taught me invaluable lessons about professional game audio production:

1. **Scope Management**: Planning and executing a complete audio overhaul requires careful time management and realistic goal-setting
2. **Technical Problem-Solving**: Audio implementation often requires creative technical solutions and collaboration with other disciplines
3. **Iterative Design**: Constant playtesting and iteration are essential for creating audio that truly serves gameplay
4. **Professional Workflow**: Working with version control, documentation, and organized asset management is crucial for large projects
5. **Communication**: Regular communication with team members and clear documentation made the integration process smooth

## Results and Reflection

*Not Raised By Wolves* now has a complete, professional-quality audio experience that transforms the feel of the game. The adaptive music system creates emotional engagement, the spatial audio enhances immersion, and the responsive sound design makes every action feel impactful.

This project represents not just a technical achievement, but a creative one. I took an existing framework and reimagined what it could be, adding layers of depth and polish that elevate the entire experience. It's a showcase of my technical abilities with audio middleware, my creative sound design skills, and my ability to manage and execute a large-scale audio project from concept to completion.

As I move forward in my career as a technical sound designer, the lessons from *Not Raised By Wolves* will continue to inform my approach to game audio. This project proved to me that with the right tools, technical knowledge, and creative vision, audio can be a transformative force in game development.

## Conclusion

The *Not Raised By Wolves* capstone project was my opportunity to demonstrate everything I've learned at Vancouver Film School and to push myself creatively and technically. Redesigning the complete audio for an existing game, while adding new features and systems, was an ambitious undertaking that required dedication, problem-solving, and a deep understanding of interactive audio.

I'm proud of what I've accomplished with this project, and I'm excited to bring these skills—technical audio implementation, creative sound design, and systematic thinking—to professional game audio projects in the future.
