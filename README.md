# 🎵 Jammming - A Spotify Playlist Creator  

Jammming is a **React.js web application** that allows users to **search for songs, create custom playlists, and save them directly to their Spotify account**.  


---

## 📌 Project Purpose  

This project was built to **gain hands-on experience** in:  
✅ **React.js fundamentals** (components, state, props)  
✅ **Interacting with APIs** (fetching and sending data)  
✅ **User authentication** (handling OAuth with Spotify)  
✅ **Managing application state dynamically**  
✅ **Building & testing a fully functional web app**  

---

## 🛠️ Technologies Used  

- **React.js** → Component-based UI  
- **JavaScript (ES6+)** → Core logic  
- **Spotify Web API** → Fetch track data & save playlists  
- **OAuth 2.0 (Implicit Grant Flow)** → User authentication  
- **Jest & React Testing Library** → Unit & integration testing  
- **CSS (Styled Components)** → Responsive design  

---

## 🎨 Features  

### 1️⃣ Spotify Authentication  

🔹 Uses the **Implicit Grant Flow** to authenticate users securely.  
🔹 Stores access tokens to interact with **Spotify API**.  

### 2️⃣ Search & Track Selection  

🔹 Users can **search for songs** in real time.  
🔹 Click **"+"** to add tracks to a custom playlist.  
🔹 Click **"-"** to remove tracks from the playlist.  

### 3️⃣ Playlist Management  

🔹 Users can **rename playlists** dynamically.  
🔹 Playlists are stored temporarily before saving.  

### 4️⃣ Save to Spotify  

🔹 On clicking **"Save Playlist"**, the playlist is:  
✔️ Created on Spotify  
✔️ Songs are added automatically  
✔️ The local playlist resets for a new session  

---

## 📌 How to Run the Project  

### 1️⃣ Clone the Repository  

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/jammming.git
cd jammming
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
npm start
```

Open http://localhost:3000/ in your browser.
