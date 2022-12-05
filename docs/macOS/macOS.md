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
- [The Unarchiver](https://theunarchiver.com/) - Open any archive in seconds
- [Latest](https://github.com/mangerlahn/Latest) - A small utility app for macOS that makes sure you know about all the latest updates to the apps you use
- [Hand Mirror](https://handmirror.app/) - A one-click camera check, right from the menu bar
- [Presentify](https://presentify.compzets.com/) - Helps you give better presentations
- [shottr](https://shottr.cc/) - Replacement of default macOS screenshot tool

## Links
- [My 2022 New Mac Setup](https://www.swyx.io/new-mac-setup/)
- [Как называть файлы](https://t.me/telelater/107) - only latin letters, only hyphen as separator and add prefix yyyy-mm-dd in case of tracking change of date 
- [Is Setapp subscription better than buying software?](https://seva.rocks/post/setappeng.html)
- [macOS Monterey: Setting up a Mac for Development](https://www.taniarascia.com/setting-up-a-brand-new-mac-for-development/)
- [THE BEST Mac Terminal Setup for 2022](https://bdarfler.medium.com/the-best-mac-terminal-setup-for-2022-44bf6e3c1a6e)
- [Hardening macOS](https://www.bejarano.io/hardening-macos/)
- [Как я MacOS настроил под себя (2022)](https://vas3k.club/post/17150/)