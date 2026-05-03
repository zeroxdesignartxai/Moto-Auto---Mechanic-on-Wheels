import { services } from "./data/services.js";

const serviceGrid = document.querySelector("#serviceGrid");
const serviceSelect = document.querySelector("#serviceSelect");
const bookingForm = document.querySelector("#bookingForm");
const formMessage = document.querySelector("#formMessage");
const requestList = document.querySelector("#requestList");
const storageKey = "moto-auto-requests";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizePhone(value) {
  return value.replace(/[^\d+]/g, "");
}

function loadRequests() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRequests(requests) {
  localStorage.setItem(storageKey, JSON.stringify(requests));
}

function renderServices() {
  serviceGrid.innerHTML = services
    .map(
      (service) => `
        <article class="service-card">
          <div>
            <h3>${escapeHtml(service.name)}</h3>
            <p>${escapeHtml(service.summary)}</p>
          </div>
          <footer>
            <span>${escapeHtml(service.price)}</span>
            <small>${escapeHtml(service.eta)}</small>
          </footer>
        </article>
      `
    )
    .join("");

  serviceSelect.innerHTML = '<option value="">Select service</option>' +
    services.map((service) => `<option value="${escapeHtml(service.name)}">${escapeHtml(service.name)}</option>`).join("");
}

function renderRequests() {
  const requests = loadRequests();

  if (requests.length === 0) {
    requestList.innerHTML = '<p class="empty-state">No saved requests yet. Submit the form to create the first dispatch ticket.</p>';
    return;
  }

  requestList.innerHTML = requests
    .map(
      (request) => `
        <article class="request-card">
          <div>
            <h3>${escapeHtml(request.service)} for ${escapeHtml(request.vehicle)}</h3>
            <p>${escapeHtml(request.notes)}</p>
          </div>
          <dl>
            <div><dt>Name</dt><dd>${escapeHtml(request.name)}</dd></div>
            <div><dt>Phone</dt><dd>${escapeHtml(request.phone)}</dd></div>
            <div><dt>Location</dt><dd>${escapeHtml(request.location)}</dd></div>
            <div><dt>Urgency</dt><dd>${escapeHtml(request.urgency)}</dd></div>
          </dl>
        </article>
      `
    )
    .join("");
}

function getFormData(form) {
  const data = Object.fromEntries(new FormData(form).entries());

  return {
    id: `${normalizePhone(data.phone)}:${data.vehicle.trim().toLowerCase()}`,
    name: data.name.trim(),
    phone: data.phone.trim(),
    vehicle: data.vehicle.trim(),
    service: data.service,
    location: data.location.trim(),
    urgency: data.urgency,
    notes: data.notes.trim(),
    createdAt: new Date().toISOString()
  };
}

function validateRequest(request) {
  if (request.name.length < 2) return "Enter the customer's full name.";
  if (!/^[0-9+().\-\s]{7,20}$/.test(request.phone)) return "Enter a valid phone number.";
  if (request.vehicle.length < 3) return "Enter the vehicle year, make, and model.";
  if (!services.some((service) => service.name === request.service)) return "Choose a valid service.";
  if (request.location.length < 3) return "Enter a service location.";
  if (request.notes.length < 10) return "Add at least 10 characters about what happened.";
  return "";
}

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const request = getFormData(bookingForm);
  const error = validateRequest(request);

  if (error) {
    formMessage.textContent = error;
    formMessage.className = "form-message full-span error";
    return;
  }

  const requests = loadRequests();
  const existingIndex = requests.findIndex((item) => item.id === request.id);

  if (existingIndex >= 0) {
    requests[existingIndex] = request;
    formMessage.textContent = "Updated the existing dispatch request for this phone and vehicle.";
  } else {
    requests.unshift(request);
    formMessage.textContent = "Dispatch request created. The summary is saved below.";
  }

  saveRequests(requests);
  bookingForm.reset();
  formMessage.className = "form-message full-span success";
  renderRequests();
});

renderServices();
renderRequests();
