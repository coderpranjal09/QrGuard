 /* const vehicleData = [
    { vehicleID: "1234AB", model: "Toyota Corolla", vehicleNo: "DL3CAB1234", driverName: "Rajesh Kumar", ownerName: "Amit Sharma", driverMobile: "9876543210" },
    { vehicleID: "5678CD", model: "Honda Civic", vehicleNo: "MH12DE5678", driverName: "Suresh Gupta", ownerName: "Pooja Singh", driverMobile: "8765432109" },
    { vehicleID: "9012EF", model: "Hyundai Elantra", vehicleNo: "UP32EF9012", driverName: "Manoj Tiwari", ownerName: "Neha Rani", driverMobile: "9654782130" },
    { vehicleID: "3456GH", model: "Ford Figo", vehicleNo: "HR26GH3456", driverName: "Karan Mehta", ownerName: "Ritika Shah", driverMobile: "9872134560" },
    { vehicleID: "7890IJ", model: "Maruti Swift", vehicleNo: "MH14IJ7890", driverName: "Nikhil Joshi", ownerName: "Kavita Bansal", driverMobile: "9821345780" },
    { vehicleID: "1234KL", model: "Mahindra Scorpio", vehicleNo: "DL8SKL1234", driverName: "Akshay Rana", ownerName: "Rajni Kapoor", driverMobile: "9712458360" },
    { vehicleID: "5678MN", model: "Renault Duster", vehicleNo: "RJ15MN5678", driverName: "Sunil Patel", ownerName: "Ravi Khanna", driverMobile: "9532148790" },
    { vehicleID: "9012OP", model: "Kia Seltos", vehicleNo: "GJ5OP9012", driverName: "Prakash Singh", ownerName: "Sanjay Arora", driverMobile: "9802143670" },
    { vehicleID: "3456QR", model: "Chevrolet Beat", vehicleNo: "PB10QR3456", driverName: "Vivek Chopra", ownerName: "Preeti Verma", driverMobile: "9812346570" },
    { vehicleID: "7890ST", model: "Volkswagen Polo", vehicleNo: "WB20ST7890", driverName: "Rajveer Singh", ownerName: "Anu Mathew", driverMobile: "9583471209" },
    { vehicleID: "1234UV", model: "Tata Nexon", vehicleNo: "KA03UV1234", driverName: "Vikas Gupta", ownerName: "Poonam Das", driverMobile: "9898765432" },
    { vehicleID: "5678WX", model: "Honda Amaze", vehicleNo: "TN05WX5678", driverName: "Harish Kumar", ownerName: "Divya Singh", driverMobile: "9921345678" },
    { vehicleID: "9012YZ", model: "Ford EcoSport", vehicleNo: "UP80YZ9012", driverName: "Sumit Roy", ownerName: "Seema Chawla", driverMobile: "9954781234" },
    { vehicleID: "3456AA", model: "Hyundai i20", vehicleNo: "DL10AA3456", driverName: "Rohan Joshi", ownerName: "Manisha Thakur", driverMobile: "9987412365" },
    { vehicleID: "7890BB", model: "Maruti Alto", vehicleNo: "PB32BB7890", driverName: "Ajay Kumar", ownerName: "Nidhi Ahuja", driverMobile: "9845123678" },
    { vehicleID: "1234CC", model: "Toyota Innova", vehicleNo: "RJ06CC1234", driverName: "Ramesh Singh", ownerName: "Mohit Bhatt", driverMobile: "9912347856" },
    { vehicleID: "5678DD", model: "Mahindra XUV300", vehicleNo: "MH15DD5678", driverName: "Deepak Chauhan", ownerName: "Priya Arora", driverMobile: "9821345687" },
    { vehicleID: "9012EE", model: "Honda City", vehicleNo: "KA01EE9012", driverName: "Krish Verma", ownerName: "Aarti Shetty", driverMobile: "9874512367" },
    { vehicleID: "3456FF", model: "Renault Kwid", vehicleNo: "AP09FF3456", driverName: "Ashish Gupta", ownerName: "Sangeeta Kapoor", driverMobile: "9645123789" },
    { vehicleID: "7890GG", model: "Hyundai Verna", vehicleNo: "HR26GG7890", driverName: "Ravi Patel", ownerName: "Suman Pandey", driverMobile: "9512347865" },
    { vehicleID: "1234HH", model: "Maruti Baleno", vehicleNo: "MH12HH1234", driverName: "Amit Sinha", ownerName: "Deepa Saxena", driverMobile: "9990012345" },
    { vehicleID: "5678II", model: "Nissan Sunny", vehicleNo: "GJ1II5678", driverName: "Varun Taneja", ownerName: "Reena Joshi", driverMobile: "9900012345" },
    { vehicleID: "9012JJ", model: "Toyota Fortuner", vehicleNo: "DL7SJJ9012", driverName: "Shyam Lal", ownerName: "Manoj Khanna", driverMobile: "9891212345" },
    { vehicleID: "3456KK", model: "Ford Endeavour", vehicleNo: "TN9KK3456", driverName: "Naveen Kumar", ownerName: "Sona Patel", driverMobile: "9987123456" },
    { vehicleID: "7890LL", model: "MG Hector", vehicleNo: "UP16LL7890", driverName: "Ashok Bhat", ownerName: "Anjali Sen", driverMobile: "9876123456" },
    { vehicleID: "1234MM", model: "Maruti Vitara Brezza", vehicleNo: "HR3MM1234", driverName: "Vijay Shukla", ownerName: "Rakhi Gupta", driverMobile: "9865123456" },
    { vehicleID: "5678NN", model: "Hyundai Creta", vehicleNo: "KA2NN5678", driverName: "Kishore Reddy", ownerName: "Sita Devi", driverMobile: "9833123456" },
    { vehicleID: "9012OO", model: "Tata Harrier", vehicleNo: "DL3COO9012", driverName: "Narendra Mehta", ownerName: "Santosh Rai", driverMobile: "9817123456" },
    { vehicleID: "3456PP", model: "Mahindra Thar", vehicleNo: "MH4PP3456", driverName: "Karan Singh", ownerName: "Anupama Iyer", driverMobile: "9909123456" },
    { vehicleID: "7890QQ", model: "Honda WRV", vehicleNo: "GJ6QQ7890", driverName: "Parag Shah", ownerName: "Amrita Kulkarni", driverMobile: "9798123456" },
    { vehicleID: "1234RR", model: "Maruti Ciaz", vehicleNo: "PB8RR1234", driverName: "Raj Malik", ownerName: "Megha Chopra", driverMobile: "9678123456" },
    { vehicleID: "5678SS", model: "Nissan Kicks", vehicleNo: "WB2SS5678", driverName: "Subhash Kumar", ownerName: "Rashmi Patel", driverMobile: "9653123456" },
    { vehicleID: "9012TT", model: "Kia Carnival", vehicleNo: "TN7TT9012", driverName: "Brijesh Gupta", ownerName: "Hema Rajan", driverMobile: "9632123456" },
    { vehicleID: "3456UU", model: "Volkswagen Vento", vehicleNo: "AP3UU3456", driverName: "Jatin Mehra", ownerName: "Sneha Batra", driverMobile: "9599123456" },
    { vehicleID: "7890VV", model: "Toyota Yaris", vehicleNo: "DL1CVV7890", driverName: "Nilesh Menon", ownerName: "Nikita Menon", driverMobile: "9587123456" },
    { vehicleID: "1234WW", model: "Hyundai Tucson", vehicleNo: "KA4WW1234", driverName: "Lalit Rai", ownerName: "Neha Tiwari", driverMobile: "9567123456" },
    { vehicleID: "5678XX", model: "Mahindra Marazzo", vehicleNo: "UP7XX5678", driverName: "Manish Tiwari", ownerName: "Mona Jain", driverMobile: "9547123456" },
    { vehicleID: "9012YY", model: "Ford Aspire", vehicleNo: "HR5YY9012", driverName: "Ajit Reddy", ownerName: "Sneha Mehta", driverMobile: "9532123456" },
    { vehicleID: "3456ZZ", model: "Renault Captur", vehicleNo: "MH6ZZ3456", driverName: "Abhay Sharma", ownerName: "Shalini Das", driverMobile: "9512123456" },
    { vehicleID: "7890AB", model: "Volkswagen Taigun", vehicleNo: "RJ4AB7890", driverName: "Sameer Verma", ownerName: "Anu Khan", driverMobile: "9487123456" },
    { vehicleID: "1234CD", model: "Honda Jazz", vehicleNo: "DL3BCD1234", driverName: "Kapil Mohan", ownerName: "Chandni Rao", driverMobile: "9478123456" },
    { vehicleID: "5678EF", model: "Hyundai Alcazar", vehicleNo: "PB5DEF5678", driverName: "Ranjit Singh", ownerName: "Leena Shekhawat", driverMobile: "9456123456" },
    { vehicleID: "9012GH", model: "Tata Safari", vehicleNo: "WB6FGH9012", driverName: "Harpreet Kaur", ownerName: "Veena Malik", driverMobile: "9445123456" },
    { vehicleID: "3456IJ", model: "Kia Sonet", vehicleNo: "GJ8HIJ3456", driverName: "Shubham Yadav", ownerName: "Nikita Desai", driverMobile: "9423123456" },
    { vehicleID: "7890KL", model: "Toyota Etios", vehicleNo: "UP9JKL7890", driverName: "Mahesh Nair", ownerName: "Ankit Trivedi", driverMobile: "9409123456" },
];
*/

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
        const message = `
            Vehicle Alert 🚨\n
            Vehicle ID: ${vehicleInfo.vehicleID}\n
            Model: ${vehicleInfo.model}\n
            Issue: ${selectedIssue}\n
            Contact: ${contactNo}\n
            Additional Info: ${additionalInfo}\n
        `.trim().replace(/\n/g, "%0A");

        const whatsappURL = `https://wa.me/${vehicleInfo.driverMobile}?text=${message}`;
        window.open(whatsappURL, '_blank');
    }
}

function goHome() {
    window.location.href = "./index.html"; // Replace with actual homepage URL
}
