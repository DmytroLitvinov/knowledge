# macOS

## Code

### macOS Defaults

```bash
# Remove dock animation
defaults write com.apple.dock autohide-delay -int 0
defaults read com.apple.dock autohide-time-modifier -float 0.15
killall Dock

# Revert
defaults delete com.apple.dock autohide-delay
defaults delete com.apple.dock autohide-time-modifier
killall Dock
```

## Apps

- [Font Smoothing Adjuster](https://www.fontsmoothingadjuster.com/) - disable it according to article ["Time to upgrade your monitor"](https://tonsky.me/blog/monitors/)