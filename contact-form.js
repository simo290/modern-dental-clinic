<!-- Contact Section -->
<section id="contact" class="py-20 bg-gray-100">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <div class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required>
                </div>
                <div class="mb-4">
                    <label for="phone" class="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required>
                </div>
                <div class="mb-4">
                    <label for="service" class="block text-gray-700 font-semibold mb-2">Service Needed</label>
                    <select id="service" name="service" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required>
                        <option value="">Select Service</option>
                        <option value="General Dentistry">General Dentistry</option>
                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                        <option value="Orthodontics">Orthodontics</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="datetime" class="block text-gray-700 font-semibold mb-2">Preferred Date & Time for Appointment</label>
                    <input type="datetime-local" id="datetime" name="datetime" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required>
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Submit</button>
            </form>
            <div id="success-message" class="mt-4 text-green-600 text-center hidden">Thank you! Your message has been sent successfully. We will contact you soon.</div>
        </div>
    </div>
</section>
