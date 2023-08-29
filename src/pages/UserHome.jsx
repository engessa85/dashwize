import React from "react";
import TopBar from "../components/TopBar";
import { BsSearch } from "react-icons/bs";
import UserSelection from "../components/UserSelection";

function UserHome() {
  return (
    <>
      <TopBar />
      <section className="userhome-section-1">
        <div className="userhome-section-1__container">
          <h1 className="title1">All the software you need to run</h1>
          <h1 className="title2">your business</h1>
        </div>
      </section>
      <section className="userhome-section-2">
        <div className="userhome-section-2__sidebar">
          <div className="container">
            <div className="search">
              <BsSearch className="icon" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="title">
              <p>CATEGORIES</p>
            </div>
            <div className="all">
              <p>All Categories</p>
            </div>
            <div className="lead">
              <p>CEO</p>
            </div>
            <div className="lead">
              <p>CTO</p>
            </div>
            <div className="lead">
              <p>CFO</p>
            </div>
            <div className="lead">
              <p>Sales</p>
            </div>
            <div className="lead">
              <p>Services</p>
            </div>
            <div className="lead">
              <p>Finance</p>
            </div>
            <div className="lead">
              <p>Email & Collabrotion</p>
            </div>
            <div className="lead">
              <p>HR</p>
            </div>
            <div className="lead">
              <p>BI & Analytics</p>
            </div>
            <div className="lead">
              <p>Developer Platforms</p>
            </div>
            <div className="lead">
              <p>Market Place</p>
            </div>
            <div className="lead">
              <p>Mobile apps</p>
            </div>
          </div>
        </div>
        <div className="userhome-section-2__main">
          <div className="container">
            <div className="title">All Categories</div>
            <section className="all">
              <UserSelection
                imageLink={"assets/ucrm.png"}
                title={"CRM"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uemail.png"}
                title={"Mail"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uform.png"}
                title={"Forms"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />
            </section>
            <div className="title">Sales</div>
            <div className="subtitle">
              Help your sales team be more productive with tools they’d love.
            </div>

            <section className="all">
              <UserSelection
                imageLink={"assets/ueconomy.png"}
                title={"Sales IQ"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/ubar.png"}
                title={"Thrive"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uform.png"}
                title={"Route IQ"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />
            </section>
            <section className="all">
              <UserSelection
                imageLink={"assets/uphone.png"}
                title={"Voice"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uemail.png"}
                title={"Mail"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uform.png"}
                title={"Form"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />
            </section>
            <div className="title">CEO</div>
            <div className="subtitle">
              Engage with prospects using multi-channel marketing tools that
              help you personalize experiences at scale.
            </div>
            <section className="all">
              <UserSelection
                imageLink={"assets/usurvey.png"}
                title={"Survey"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/usocial.png"}
                title={"Social"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uform.png"}
                title={"Route IQ"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />
            </section>
            <section className="all">
              <UserSelection
                imageLink={"assets/ucompany.png"}
                title={"Companies"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uemail.png"}
                title={"Mail"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uform.png"}
                title={"Form"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />
            </section>
            <div className="title">CTO</div>
            <div className="subtitle">
              Help your sales team be more productive with tools they’d love.
            </div>
            <section className="all">
              <UserSelection
                imageLink={"assets/ueconomy.png"}
                title={"Sales IQ"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/ubar.png"}
                title={"Thrive"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uform.png"}
                title={"Route IQ"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />
            </section>
            <section className="all">
              <UserSelection
                imageLink={"assets/uphone.png"}
                title={"Voice"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uemail.png"}
                title={"Mail"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uform.png"}
                title={"Form"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />
            </section>
            <div className="title">Finance</div>
            <div className="subtitle">
            Keep a tab on your expenses and manage your back office operations smoothly.
            </div>
            <section className="all">
              <UserSelection
                imageLink={"assets/usurvey.png"}
                title={"Survey"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/usocial.png"}
                title={"Social"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uform.png"}
                title={"Route IQ"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />
            </section>
            <section className="all">
              <UserSelection
                imageLink={"assets/ucompany.png"}
                title={"Companies"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uemail.png"}
                title={"Mail"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />

              <UserSelection
                imageLink={"assets/uform.png"}
                title={"Form"}
                lead={"Let's break the myth that CRMs are all about data entry"}
                linktext={"Learn More"}
              />
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserHome;
