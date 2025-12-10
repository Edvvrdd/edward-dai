import re

# Read the CSS file
with open('/home/ubuntu/edward-dai/style.css', 'r') as f:
    css = f.read()

# 1. Update carousel card - add position relative and change transition
css = re.sub(
    r'\.carousel-card \{([^}]+)transition: transform 0\.3s ease;',
    r'.carousel-card {\1transition: all 0.3s ease;\n  position: relative;',
    css,
    flags=re.DOTALL
)

# 2. Add carousel card ::before pseudo-element (insert after carousel-card definition)
carousel_before = '''
.carousel-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #00D9FF 0%, #A78BFA 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: 10;
  border-radius: 12px 12px 0 0;
}

.carousel-card:hover::before {
  transform: scaleX(1);
}
'''

# Insert after .carousel-card definition
css = re.sub(
    r'(\.carousel-card \{[^}]+\})',
    r'\1\n' + carousel_before,
    css,
    count=1
)

# 3. Update carousel-image-placeholder transition
css = re.sub(
    r'\.carousel-image-placeholder \{([^}]+)transition: border-color 0\.3s ease, box-shadow 0\.3s ease;',
    r'.carousel-image-placeholder {\1transition: all 0.3s ease;',
    css,
    flags=re.DOTALL
)

# 4. Update carousel hover effect
css = re.sub(
    r'\.carousel-card:hover \.carousel-image-placeholder \{\s*border-color: #00D9FF;\s*box-shadow: 0 0 20px rgba\(78, 205, 196, 0\.3\);',
    r'.carousel-card:hover .carousel-image-placeholder {\n  border-color: #00D9FF;\n  box-shadow: 0 8px 24px rgba(0, 217, 255, 0.2);\n  background-color: rgba(18, 23, 46, 0.9);',
    css
)

# 5. Update testimonial card transition
css = re.sub(
    r'\.testimonial-card \{([^}]+)transition: transform 0\.3s ease, border-color 0\.3s ease, box-shadow 0\.3s ease;',
    r'.testimonial-card {\1transition: all 0.3s ease;',
    css,
    flags=re.DOTALL
)

# 6. Add testimonial card ::before pseudo-element
testimonial_before = '''
.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #A78BFA 0%, #00D9FF 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  border-radius: 12px 12px 0 0;
}

.testimonial-card:hover::before {
  transform: scaleX(1);
}
'''

css = re.sub(
    r'(\.testimonial-card \{[^}]+position: relative;\s*\})',
    r'\1\n' + testimonial_before,
    css,
    count=1
)

# 7. Update testimonial hover shadow color and add background
css = re.sub(
    r'\.testimonial-card:hover \{\s*transform: translateY\(-8px\);\s*border-color: #A78BFA;\s*box-shadow: 0 8px 24px rgba\(82, 183, 136, 0\.2\);',
    r'.testimonial-card:hover {\n  transform: translateY(-8px);\n  border-color: #A78BFA;\n  box-shadow: 0 8px 24px rgba(167, 139, 250, 0.2);\n  background-color: rgba(26, 31, 58, 0.95);',
    css
)

# 8. Add quote icon transition and hover effect
css = re.sub(
    r'(\.quote-icon \{[^}]+margin-bottom: 15px;)',
    r'\1\n  transition: all 0.3s ease;',
    css
)

# Add quote icon hover after the quote-icon definition
quote_hover = '''
.testimonial-card:hover .quote-icon {
  color: #A78BFA;
  transform: scale(1.1);
}
'''

css = re.sub(
    r'(\.quote-icon \{[^}]+\})',
    r'\1\n' + quote_hover,
    css,
    count=1
)

# 9. Update social icon timing from 0.2s to 0.3s
css = re.sub(
    r'\.social-link \{([^}]+)transition: transform 0\.2s ease;',
    r'.social-link {\1transition: transform 0.3s ease;',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.social-icon-small \{([^}]+)transition: filter 0\.2s ease;',
    r'.social-icon-small {\1transition: filter 0.3s ease;',
    css,
    flags=re.DOTALL
)

# 10. Update video nav button timing
css = re.sub(
    r'(\.video-nav-btn \{[^}]+)transition: all 0\.2s ease;',
    r'\1transition: all 0.3s ease;',
    css,
    flags=re.DOTALL
)

# Write the updated CSS
with open('/home/ubuntu/edward-dai/style.css', 'w') as f:
    f.write(css)

print("✅ All hover animation updates applied successfully!")
