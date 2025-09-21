// ==========================
// SUPABASE CLOUD STORAGE
// ==========================

const messageElement = document.getElementById('message');
const galleryElement = document.getElementById('gallery');
const uploadButton   = document.getElementById('uploadButton');
const imageInput     = document.getElementById('imageInput');

// --- Supabase Configuration ---
const SUPABASE_URL = 'https://femfotbdwjzgkpnnamcb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlbWZvdGJkd2p6Z2twbm5hbWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0MTExNTQsImV4cCI6MjA3Mzk4NzE1NH0.U6zXqZVCqoabbVBy2GRp56yEr7b1cIea8hkufJh4E7s';
const BUCKET_NAME  = 'Product-Images';

// --- Create Supabase Client ---
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// --- Helper to show messages ---
function showMessage(text, isError = false) {
  messageElement.textContent = text;
  messageElement.className   = isError ? 'error' : 'success';
}

// --- Upload Selected Images and RETURN Public URLs ---
async function uploadImages() {
  const files = imageInput.files;
  if (!files || files.length === 0) {
    showMessage('Please select at least one image', true);
    return [];
  }

  uploadButton.disabled = true;
  uploadButton.textContent = 'Uploading...';

  const uploadedUrls = []; // <--- collect URLs here

  try {
    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        throw new Error(`File ${file.name} is not an image`);
      }
      if (file.size > 5 * 1024 * 1024) {
        throw new Error(`File ${file.name} exceeds 1MB limit`);
      }

      // Create unique file name
      const ext = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;

      // Upload to Supabase Storage
      const { error } = await supabaseClient
        .storage
        .from(BUCKET_NAME)
        .upload(fileName, file, { cacheControl: '3600', upsert: false });

      if (error) throw error;

      // Get public URL and add to array
      const { data: { publicUrl } } = supabaseClient
        .storage
        .from(BUCKET_NAME)
        .getPublicUrl(fileName);

      uploadedUrls.push(publicUrl);
    }

    showMessage('Image uploaded successfully!');
    imageInput.value = '';
    // fetchImages();

    // ✅ return the list of URLs
    return uploadedUrls;

  } catch (err) {
    console.error('Upload error:', err);
    showMessage(err.message, true);
    return []; // return empty if error
  } finally {
    uploadButton.disabled = false;
    uploadButton.textContent = 'Upload Images';
  }
}

// --- Fetch and Display Images in Gallery ---
/*
async function fetchImages() {
  try {
    const { data: files, error } = await supabaseClient
      .storage
      .from(BUCKET_NAME)
      .list('', { limit: 100, sortBy: { column: 'created_at', order: 'desc' } });

    if (error) throw error;

    galleryElement.innerHTML = '';
    for (const file of files) {
      const { data: { publicUrl } } = supabaseClient
        .storage
        .from(BUCKET_NAME)
        .getPublicUrl(file.name);

      const img = document.createElement('img');
      img.src   = publicUrl;
      img.alt   = file.name;
      img.title = file.name;
      galleryElement.appendChild(img);
    }
  } catch (err) {
    console.error('Fetch error:', err);
    showMessage(err.message, true);
  }
}
*/

// --- Initialize Page ---
document.addEventListener('DOMContentLoaded', () => {
  showMessage('Ready to upload!');
  uploadButton.disabled = false;

  // Example: using the returned URLs
  uploadButton.addEventListener('click', async () => {
    const urls = await uploadImages();
    console.log('Uploaded public URLs:', urls);
  });

  // fetchImages();
});
