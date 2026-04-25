import { useState } from "react";

export function useGooglePicker(onSelect: (file: any) => void) {
  const [loaded, setLoaded] = useState(false);

function loadApi() {
  return new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined") return;

    // If already loaded
    if (window.gapi && window.gapi.auth) {
      return resolve();
    }

    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.onload = () => {
      window.gapi.load("client:auth2", async () => {
        await window.gapi.client.load("drive", "v3");
        resolve();
      });
    };
    script.onerror = reject;

    document.body.appendChild(script);
  });
}

  const authorize = () => new Promise<string>((resolve) => {
    window.gapi.auth.authorize(
      {
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        scope: "https://www.googleapis.com/auth/drive.readonly",
        immediate: false,
      },
      (authResult: any) => {
        resolve(authResult.access_token);
      }
    );
  });

  const openPicker = async () => {
    const token = await authorize();

    const picker = new google.picker.PickerBuilder()
      .addView(new google.picker.DocsView())
      .setOAuthToken(token)
      .setDeveloperKey(process.env.NEXT_PUBLIC_GOOGLE_API_KEY!)
      .setCallback((data: any) => {
        if (data.action === google.picker.Action.PICKED) {
          const file = data.docs[0];
          onSelect({
            name: file.name,
            file_id: file.id,
            mime_type: file.mimeType,
            download_url: `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&access_token=${token}`,
            preview_url: `https://drive.google.com/file/d/${file.id}/preview`,
          });
        }
      })
      .build();

    picker.setVisible(true);
  };

  const pick = async () => {
    if (!loaded) {
      await loadApi();
      setLoaded(true);
    }
    openPicker();
  };

  return { pick };
}
