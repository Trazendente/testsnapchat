import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI1OTk1ODg4LCJzdWIiOiJmZTBlYTZkNS0wNjkyLTQ3MGEtYmVlNi1kNDQ1NDkyY2ZhNzd-U1RBR0lOR34zNTMzYzE1Ny1lZTM1LTRjNGYtYmVjZC0xODgwZGY1NTlmODcifQ.ljYneRMTS0ujT7H6VcPC-3Mw3gAa8zqx4XDzoOLhNv8',
  });
  const liveRenderTarget = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    '7f650cbe-90f4-4944-a6f5-c2fe1d98a5d6',
    '98e7af62-b1ab-444b-820d-44250f1c3d45'
  );

  await session.applyLens(lens);
})();
