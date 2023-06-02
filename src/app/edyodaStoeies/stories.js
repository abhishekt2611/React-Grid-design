import styles from './Stories.module.css'

const Stories = () => {
    return<>
     <div className={styles.container}>
    <header>
        <div>
            <div className={styles.topbar}>
                <div>
                    <div className={styles.logo}>
                        EDYODA
                    </div>
                    <p className={styles.logostories}>Stories</p>
                </div>
                <div className={styles.expcat}>
                      Explore Catagories
                      <span>
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="/>
                      </span>
                </div>
                <div className={styles.BlogNavigationLinks__NonMobileOnly__2Kio}>
                    <p className={styles.BlogNavigationLinks__EdyodaText__11wl2}>EdYoda is a learning and knowledge<br></br>
                    sharing platform for techies</p>
                    </div>
                <div>
                    <button className={styles.btn}>Go To Main Website</button>
                </div>
            </div>
        </div>  
    </header>
</div>
<div className={styles.allcard}>
            <div className={styles.catagoriecontainer}>
                <h1 className={styles.heading}>Latest Posts</h1>
                <div >
                <p className={styles.cat}><span>
                    <img className={styles.filtimg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="/>
                </span>Filter by Category    
                </p>
                </div>
        </div>
            <div>
            <div className={styles.catagoryfilter}>
                <div className={styles.filtercontainer}>
                      <div className={styles.activecatagories}>All</div>
                      <div className={styles.catagories}>Artificial Intelligence</div>
                      <div className={styles.catagories}>Cloud Computing</div>
                      <div className={styles.catagories}>DevOps</div>
                      <div className={styles.catagories}>Programming Languages</div>
                      <div className={styles.catagories}>Mobile Application Development</div>
                      <div className={styles.catagories}>Technology and Tools</div>
                      <div className={styles.catagories}>Get a Job in a Tech Company</div>
                      <div className={styles.catagories}>Others</div>
                </div>
            </div>
            </div>
            <div className={styles.cardcontainer}>
                  <div className={styles.blockcardcontainer}>
                         <div className={styles.imgcontainer}>
                             <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"/>
                         </div>
                         <div className={styles.blockdetails}>
                             <h3 className={styles.blocktitle}>Fresh Graduate or IT professional Looking fo...</h3>
                             <p className={styles.authorname}> Arman Ahmed
                                 <span className={styles.date}>|4 jul 2019</span>
                             </p>
                             <div className={styles.discription}>
                                If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess...<wbr/>
                             </div>
                         </div>
                  </div>
            </div>  
            <div className={styles.cardcontainer}>
                  <div className={styles.blockcardcontainer}>
                         <div className={styles.imgcontainer}>
                             <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"/>
                         </div>
                         <div className={styles.blockdetails}>
                             <h3 className={styles.blocktitle}>Introducing you all to EdYoda...</h3>
                             <p className={styles.authorname}> Kalyan Mahalingam
                                 <span className={styles.date}>|5 Jul 2019</span>
                             </p>
                             <div className={styles.discription}>
                             DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the...<wbr/>
                             </div>
                         </div>
                  </div>
            </div>
            <div className={styles.cardcontainer}>
                  <div className={styles.blockcardcontainer}>
                         <div className={styles.imgcontainer}>
                             <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg"/>
                         </div>
                         <div className={styles.blockdetails}>
                             <h3 className={styles.blocktitle}>From identity crisis to the Success Story - The...</h3>
                             <p className={styles.authorname}> Kalyan Mahalingam
                                 <span className={styles.date}>|5 Jul 2019</span>
                             </p>
                             <div className={styles.discription}>
                             DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the...<wbr/>
                             </div>
                         </div>
                  </div>
            </div>
            <div className={styles.cardcontainer}>
                  <div className={styles.blockcardcontainer}>
                         <div className={styles.imgcontainer}>
                             <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"/>
                         </div>
                         <div className={styles.blockdetails}>
                             <h3 className={styles.blocktitle}>Typical day of Data Scientist - An insider...</h3>
                             <p className={styles.authorname}> Saurav Ghosh
                                 <span className={styles.date}>|5 Jul 2019</span>
                             </p>
                             <div className={styles.discription}>
                             I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right -Big Data and Data Science are the foundation of all the trends that ...<wbr/>
                             </div>
                         </div>
                  </div>
            </div>
            <div className={styles.cardcontainer}>
                  <div className={styles.blockcardcontainer}>
                         <div className={styles.imgcontainer}>
                             <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg"/>
                         </div>
                         <div className={styles.blockdetails}>
                             <h3 className={styles.blocktitle}>Amazon Web Services (AWS) Cloud Day -...</h3>
                             <p className={styles.authorname}> Saurav Ghosh
                                 <span className={styles.date}>|5 Jul 2019</span>
                             </p>
                             <div className={styles.discription}>
                             It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels...<wbr/>
                             </div>
                         </div>
                  </div>
            </div>
            <div className={styles.cardcontainer}>
                  <div className={styles.blockcardcontainer}>
                         <div className={styles.imgcontainer}>
                             <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg"/>
                         </div>
                         <div className={styles.blockdetails}>
                             <h3 className={styles.blocktitle}>Industry 4.0 - The Prospects & Journey...</h3>
                             <p className={styles.authorname}> Pitanjal Dutta
                                 <span className={styles.date}>|5 Jul 2019</span>
                             </p>
                             <div className={styles.discription}>
                             Did you ever dream a world where computers are connected and will communicate with one another to ultimately make decisions without human involvement?...<wbr/>
                             </div>
                         </div>
                  </div>
            </div>
    </div>
    <footer className={styles.footer}>
                <ul className={styles.list}>
                    <li>EDYODA</li>
                    <li>  About Us</li>
                    <li> Contact Us</li>
                    <li> Terms of Use</li>
                    <li> Privacy Policy</li>
                </ul>
        </footer>
</>
}

export default Stories