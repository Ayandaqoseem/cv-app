import React from 'react'
import '../Body/styles.css'

function Header() {
  return (
      <div>
        <div className='header'>
        
            <h2>AYANDA KAZEEM ABIODUN</h2>
            Oremeji Close Olowo-ira, Ojodu, Berger, Lagos.<br/>
            Emaail: kayceayanda11@gmail.com<br/>
            Contact: 07036461673
            <hr/>
        </div>
        <div className='contentOne'>
            <h2 className='head'>Experience</h2>
            <p className="paraOne"><b>Data entry Officer (Uwinit Nigeria)</b></p>
            <p className="paraTwo">
                <ul>
                <li>Data entry into NIMC app</li>
                <li>Issuance of NIN</li>
                <li>Generating enrolment logs</li>
                </ul>   
            </p>
            <p className="paraOne"><b>Creation of Restaurant website</b></p>
            <p className="paraTwo">The website was created as part of the online project,
                after taking part in the twelve weeks online program, the knowledge of html, css, 
                and js acquired was adopted to build some web porfolio.
            </p>
            <p className="paraOne"><b>Site engineer (Contract MTN staff)</b></p>
            <p className="paraTwo">
                <ul>
                <li>Project Management</li>
                <li>Installation of main power card</li>
                <li>Installation of compressor card</li>
                <li>Data analysis.</li>
                <li>Servicing of the tx outdoor cabinet ( Transmission cabinet)</li>
                </ul>   
            </p>
        </div>
        <div class="contentOne">
            <h1 class="head">Education</h1>
            <p class="certOne">Senior secondary Certificate Examination</p>
            <p class="certTwo">Isheri Grammar School</p>
            <p class="certOne">Bachelor of Technology in Biochemstry</p>
            <p class="certTwo">Ladoke Akintola University of Techonology</p>
            
        </div>
        
    </div>
  )
}

export default Header