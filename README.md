# Fatma Sorour Portfolio

A modern, responsive, and editable developer portfolio built with HTML, CSS, JavaScript, Tailwind CDN, and Decap CMS.  
The project is prepared for deployment on Netlify and allows portfolio content to be edited without changing the code.

## Live Features

- Fully responsive portfolio layout
- Dark and light mode toggle
- Animated hero section with typewriter text
- Interactive technical background canvas
- Editable profile image, CV file, contact details, social links, experience, skills, education, and projects
- Project cards with image, technologies, live preview link, and source code link
- Elegant project pagination when the number of projects exceeds the selected limit
- Contact form UI ready for future integration
- Back-to-top button
- SEO meta tags and structured data
- Netlify-ready configuration
- Decap CMS admin dashboard for editing content

## Project Structure

```text
.
├── admin/
│   ├── config.yml          # Decap CMS configuration
│   └── index.html          # CMS admin page
├── assets/
│   ├── uploads/            # Uploaded files/images from CMS
│   ├── profile.png         # Profile image
│   ├── Fatma_Sorour_CV.pdf # CV file
│   └── project-*.png       # Project images
├── css/
│   └── style.css           # Main stylesheet
├── data/
│   └── portfolio.json      # Editable portfolio content
├── js/
│   └── main.js             # Main JavaScript logic
├── index.html              # Main portfolio page
├── netlify.toml            # Netlify settings
├── README-AR.md            # Arabic guide
└── README.md               # English documentation
```

## Editable Content

All portfolio content is stored in:

```text
data/portfolio.json
```

You can edit this file manually, or edit it visually from the Netlify CMS dashboard after deployment.

Editable sections include:

- Site logo text, page title, meta description, and canonical URL
- Name, job title, hero text, profile image, and CV file
- About section paragraphs
- Address, email, phone, and availability
- GitHub, LinkedIn, WhatsApp, and any other social links
- Work experience
- Technical skills
- Education
- Project settings and projects list
- Project images, technologies, GitHub links, and live preview links

## Projects Pagination

Project pagination is controlled from:

```json
"projectsSettings": {
  "itemsPerPage": 3
}
```

By default, the portfolio shows 3 projects per page.  
When the number of projects is greater than `itemsPerPage`, pagination appears automatically.

To change the number of projects per page, edit `itemsPerPage` in `data/portfolio.json` or from the CMS dashboard.

## How to Run Locally

Because the project loads content from a JSON file, it is better to run it using a local server instead of opening `index.html` directly.

### Option 1: VS Code Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.

### Option 2: Python Local Server

From inside the project folder, run:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## How to Deploy on Netlify

### Method 1: Drag and Drop

1. Compress the project files into a ZIP file, or open the extracted project folder.
2. Go to Netlify.
3. Open **Sites**.
4. Drag the project folder into the Netlify deploy area.
5. Wait until the deployment finishes.

This method is quick, but it is not ideal for CMS editing because CMS changes need Git access.

### Method 2: GitHub + Netlify CMS Recommended

1. Create a new GitHub repository.
2. Upload all project files to the repository.
3. Log in to Netlify.
4. Click **Add new site**.
5. Choose **Import an existing project**.
6. Connect your GitHub repository.
7. Keep the build command empty.
8. Keep the publish directory as the root folder, or use `/`.
9. Deploy the site.

The included `netlify.toml` already contains the required settings.

## How to Enable Admin Editing on Netlify

The admin dashboard is available at:

```text
https://your-site-name.netlify.app/admin
```

To make it work:

1. Open your site dashboard on Netlify.
2. Go to **Site configuration**.
3. Open **Identity**.
4. Click **Enable Identity**.
5. Go to **Services** under Identity.
6. Enable **Git Gateway**.
7. Invite your email as an Identity user.
8. Open `/admin` on your deployed website.
9. Log in and start editing the portfolio content.

After saving changes from the admin dashboard, Netlify will commit the updates to the GitHub repository and redeploy the website automatically.

## How to Edit Portfolio Content from Admin

1. Open:

```text
https://your-site-name.netlify.app/admin
```

2. Log in with your invited email.
3. Open **Portfolio Content**.
4. Click **Edit All Portfolio Data**.
5. Update the required section.
6. Click **Save**.
7. Click **Publish**.
8. Wait for Netlify to redeploy.

## Replacing the Profile Image

From the admin dashboard:

1. Open **Portfolio Content**.
2. Open **Personal Info**.
3. Replace **Profile Image**.
4. Save and publish.

Manual method:

1. Add the new image inside `assets/` or `assets/uploads/`.
2. Update this value in `data/portfolio.json`:

```json
"profileImage": "/assets/profile.png"
```

## Replacing the CV File

From the admin dashboard:

1. Open **Portfolio Content**.
2. Open **Personal Info**.
3. Replace **CV File**.
4. Save and publish.

Manual method:

1. Add the new CV file inside `assets/` or `assets/uploads/`.
2. Update this value in `data/portfolio.json`:

```json
"cvFile": "/assets/Fatma_Sorour_CV.pdf"
```

## Adding a New Project

From the admin dashboard:

1. Open **Portfolio Content**.
2. Go to **Projects**.
3. Click **Add Projects**.
4. Add the project title, category, description, technologies, image, GitHub link, and live preview link.
5. Save and publish.

Manual example:

```json
{
  "title": "Project Name",
  "category": "Fullstack",
  "description": "Short project description.",
  "technologies": ["ASP.NET Core", "Angular", "SQL Server"],
  "image": "/assets/uploads/project-image.png",
  "githubLink": "https://github.com/username/project",
  "liveLink": "https://project-demo.netlify.app"
}
```

## Updating Social Links

Social links are controlled by the `socialLinks` array in `data/portfolio.json`.

Example:

```json
{
  "platform": "github",
  "url": "https://github.com/username",
  "icon": "fab fa-github",
  "hoverClass": "hover:text-blue-400"
}
```

The project uses Font Awesome classes for icons.

## Customization Notes

- Main styling is in `css/style.css`.
- Main JavaScript behavior is in `js/main.js`.
- Editable content is in `data/portfolio.json`.
- CMS fields are configured in `admin/config.yml`.
- Uploaded CMS media is saved in `assets/uploads/`.

## Important Notes

- Do not delete `data/portfolio.json`; the website depends on it.
- Keep image paths starting with `/assets/` when using uploaded files.
- If the website does not update immediately after publishing from CMS, wait for the Netlify deployment to finish.
- If `/admin` does not open correctly, make sure Netlify Identity and Git Gateway are enabled.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Tailwind CSS CDN
- Font Awesome
- Decap CMS
- Netlify

## Deployment Status

This project is ready to be uploaded and deployed on Netlify.

## Author

**Fatma Sorour**  
Full-Stack Developer  
Portfolio content and project data can be fully customized from the CMS dashboard.
