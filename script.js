const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const link = document.getElementById('link')
const github = document.getElementById('github')
const skil = document.getElementById('skil')
const skill = document.getElementById('skill')
const uni = document.getElementById('uni')
const school = document.getElementById('school')
const collage = document.getElementById('collage')
const des = document.getElementById('des')
const job = document.getElementById('job')
const company = document.getElementById('company')
const sum = document.getElementById('sum')

function funcResumeBuilder(){
    const n = name.value
    const e = email.value
    const p = phone.value
    const l = link.value
    const g = github.value
    const s = skil.value
    const k = skill.value
    const u = uni.value
    const sc = school.value
    const c = collage.value
    const d = des.value
    const j = job.value
    const co = company.value
    const su = sum.value
    
    const resume = document.getElementById('resume')
    resume.innerHTML = `
    
<div style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0;">
    <div style="max-width: 800px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; background-color: #f9f9f9;">
        <header style="text-align: center; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            <h1 style="margin: 0; color: #007bff;">${n}</h1>
            <p style="margin: 5px 0; font-size: 16px; color: #555;">Email: ${e} | Phone: ${p}</p>
            <p style="margin: 5px 0; font-size: 16px; color: #555;">LinkedIn: ${l} | GitHub: ${g}</p>
        </header>

        <section style="margin-top: 20px;">
            <h2 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 5px;">Summary</h2>
            <p style="margin: 10px 0;">${su}</p>
        </section>

        <section style="margin-top: 20px;">
            <h2 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 5px;">Skills</h2>
            <ul style="margin: 10px 0; padding-left: 20px;">
                <li style="margin: 5px 0;">${s}</li>
                <li style="margin: 5px 0;">${k}</li>
                
            </ul>
        </section>

        <section style="margin-top: 20px;">
            <h2 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 5px;">Experience</h2>
            
            <div style="margin: 10px 0;">
                <h3 style="margin: 0;">${j}</h3>
                <p style="margin: 5px 0; font-size: 14px; color: #555;">${co}</p>
                <p style="margin: 5px 0;">${d}</p>
            </div>
        </section>

        <section style="margin-top: 20px;">
            <h2 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 5px;">Education</h2>
            <div style="margin: 10px 0;">
                <h3 style="margin: 0;">${sc}</h3>
                <!-- <p style="margin: 5px 0; font-size: 14px; color: #555;">University Name | Graduation Year</p> -->
            </div>
            <div style="margin: 10px 0;">
                <h3 style="margin: 0;">${c}</h3>
                <!-- <p style="margin: 5px 0; font-size: 14px; color: #555;">University Name | Graduation Year</p> -->
            </div>
            <div style="margin: 10px 0;">
                <h3 style="margin: 0;">${u}</h3>
                <!-- <p style="margin: 5px 0; font-size: 14px; color: #555;">University Name | Graduation Year</p> -->
            </div>
        </section>

        

        
    </div>
</div>
    `
     n = "";
     e = "";
     p = "";
     l = "";
     g = "";
     s = "";
     k = "";
     u = "";
     sc = "";
     c = "";
     d = "";
     j = "";
     co = "";
     su = "";
// console.log(n , e ,p , l ,g , s ,k,u,sc,c,d,j,co,su)
}