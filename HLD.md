# **High-Level Design (HLD)**

## **1. Architecture Overview**

```
+-----------------+        +----------------+
|                 |        |                |
|   User Browser  | <----> | Next.js Frontend|
| (Mobile/Desktop)|        |  (React Pages) |
|                 |        |                |
+-----------------+        +----------------+
          |
          v
+-----------------+
| MediaDevices API|
| (Camera Access) |
+-----------------+
```

* **Frontend:** Next.js pages handling UI and logic.
* **Camera Layer:** Browser `MediaDevices` API for live video and capture.
* **Storage:** Images downloaded locally; optional future backend for server storage.
* **Hosting:** Cloudflare Pages (serves Next.js app).

---

## **2. Component Diagram**

```
+----------------------+
|    Camera Page       |
+----------------------+
| - Start Camera Button |
| - Capture Button      |
| - Video Feed          |
| - Canvas for Capture  |
| - Preview + Download  |
+----------------------+
```

**Components:**

1. **VideoFeedComponent** – Displays live video from camera.
2. **CaptureComponent** – Captures photo from video and stores in canvas.
3. **PreviewComponent** – Shows captured image and allows download.
4. **AppLayout** – Basic layout, responsive design.

---

## **3. Flow**

1. User opens website → `Camera Page` loads.
2. User clicks **Start Camera** → Browser prompts for permission → Live video displayed.
3. User clicks **Capture** → Photo captured to hidden canvas → Preview shown.
4. User clicks **Download** → Photo saved as PNG locally.

---

## **4. Data Flow**

* **Input:** User camera stream.
* **Processing:** Video feed rendered in browser, capture via canvas.
* **Output:** Preview and downloadable image file.

---

## **5. Deployment Flow**

1. Create Next.js app → Commit to GitHub.
2. Connect GitHub repo to Cloudflare Pages.
3. Deploy site with HTTPS.
4. Site accessible globally.


