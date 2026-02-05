# LockIn

**Stop procrastinating. Start focusing.**

LockIn is a lightweight Chrome extension that automatically closes distracting websites so you can stay productive.

---

## 🚫 Blocked Sites

Currently blocks:

- YouTube
- Reddit

(Editable in `background.js`)

---

## ⚡ Features

🔒 Instantly closes distracting tabs  
🔒 Runs automatically in the background  
🔒 Works even when popup is closed  
🔒 Simple and fast — no tracking, no accounts

---

## 🛠 Installation (Developer Mode)

1. Clone or download this repo
2. Open Chrome and go to:
   `chrome://extensions`

3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project folder

You're locked in. 🔐

---

## ✏️ Customizing Blocked Sites

Edit this list inside `background.js`:

```js
const blockedSites = ["youtube.com", "reddit.com"];
```
