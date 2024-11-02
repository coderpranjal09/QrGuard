

let mediaRecorder;
let recordedChunks = [];

function fetchVehicleData() {
    const vehicleIDInput = document.getElementById("vehicleIDInput").value;
    const vehicleInfo = vehicleData.find(vehicle => vehicle.vehicleID === vehicleIDInput);

    if (vehicleInfo) {
        document.getElementById("details").innerHTML = `
            <p>Model: ${vehicleInfo.model}</p>
            <p>Vehicle No: ${vehicleInfo.vehicleNo}</p>
            <p>Driver Name: ${vehicleInfo.driverName}</p>
            <p>Owner Name: ${vehicleInfo.ownerName}</p>
        `;
        document.getElementById("vehicleIDForm").style.display = "none";
        document.getElementById("vehicleDetails").style.display = "block";
    } else {
        alert("Invalid Vehicle ID. Please try again.");
    }
}

async function startRecording() {
    const constraints = { video: { facingMode: "environment" } };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const videoElement = document.getElementById("video");

    videoElement.srcObject = stream;
    videoElement.style.display = "block";
    
    mediaRecorder = new MediaRecorder(stream);
    recordedChunks = [];

    mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        videoElement.srcObject = null;
        videoElement.src = url;
        showVerificationScreen(url);
    };

    mediaRecorder.start();
    document.getElementById("stopButton").style.display = "block";
    document.getElementById("startRecordingButton").style.display = "none";
}

function stopRecording() {
    mediaRecorder.stop();
    mediaRecorder.stream.getTracks().forEach(track => track.stop());
    document.getElementById("stopButton").style.display = "none";
}

function showVerificationScreen(videoUrl) {
    document.getElementById("vehicleDetails").style.display = "none";
    document.getElementById("verificationScreen").style.display = "block";

    setTimeout(() => {
        document.getElementById("verificationScreen").style.display = "none";
        document.getElementById("verificationSuccess").style.display = "block";
        document.getElementById("videoPlayer").src = videoUrl;
    }, 5000);
}

function sendAlert() {
    const vehicleIDInput = document.getElementById("vehicleIDInput").value;
    const vehicleInfo = vehicleData.find(vehicle => vehicle.vehicleID === vehicleIDInput);
    const selectedIssue = document.getElementById("issueSelect").value;
    const contactNo = document.getElementById("contactNo").value;
    const additionalInfo = document.getElementById("additionalInfo").value;

    if (vehicleInfo) {
        // Prepare the SMS message text
        const message = `
            Vehicle Alert 🚨\n
            Vehicle ID: ${vehicleInfo.vehicleID}\n
            Model: ${vehicleInfo.model}\n
            Issue: ${selectedIssue}\n
            Contact: ${contactNo}\n
            Additional Info: ${additionalInfo}\n
        `.trim().replace(/\n/g, "%0A");

        // Use SMS scheme for redirection
        const smsURL = `sms:${vehicleInfo.driverMobile}?body=${message}`;
        window.open(smsURL, '_blank');
    } else {
        alert("Invalid Vehicle ID. Please try again.");
    }
}


function goHome() {
    window.location.href = "./index.html"; // Replace with actual homepage URL
}
