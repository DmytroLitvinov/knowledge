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
- [stats](https://github.com/exelban/stats) - macOS system monitor in your menu bar
- [fig](https://fig.io/) - IDE-style autocomplete to your existing terminal
- [AltTab](https://alt-tab-macos.netlify.app/) - Windows alt-tab on macOS
- [muzzle](https://muzzleapp.com/) - a simple mac app to silence embarrassing notifications while screensharing
- [Rocket](https://matthewpalmer.net/rocket/) - Mac app that makes typing emoji faster and easier using Slack-style shortcuts.
- [AdGuard](https://adguard.com/) - AdBlocker for my devices
- [DeepL](https://www.deepl.com/) - the best translator as for today
- [Rectangle](https://rectangleapp.com/) - Move and resize windows in macOS using keyboard shortcuts or snap areas
- [Warp by CloudFlare](https://1.1.1.1/)
- [HazeOver](https://hazeover.com/) - turn distractions down and focus on your current task
- [Maccy](https://maccy.app/) - a macOS app to manage your clipboard