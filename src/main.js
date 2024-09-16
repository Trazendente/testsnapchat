import {
    bootstrapCameraKit,
    createMediaStreamSource,
    Transform2D,
} from '@snap/camera-kit'

(async function(){
    var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI1OTk1ODg4LCJzdWIiOiJmZTBlYTZkNS0wNjkyLTQ3MGEtYmVlNi1kNDQ1NDkyY2ZhNzd-U1RBR0lOR34zNTMzYzE1Ny1lZTM1LTRjNGYtYmVjZC0xODgwZGY1NTlmODcifQ.ljYneRMTS0ujT7H6VcPC-3Mw3gAa8zqx4XDzoOLhNv8' })

    const session = await cameraKit.createSession()
    document.getElementById('canvas').replaceWith(session.output.live)

    const { lenses } = await cameraKit.lensRepository.loadLensGroups(['95fb84e1-5268-4fb5-b37d-3a961b4ad2cf']) 

    session.applyLens(lenses[0])

    let mediaSteam = await navigator.mediaDevices.getUserMedia({ video: true});

    const source = createMediaStreamSource(mediaSteam, {
    transform: Transform2D.MirrorX,
    cameraType: 'front' 
})

 await session.setSource(source)
 session.source.setRenderSize(window.innerWidth, window.innerHeight)
 session.play()
})();
