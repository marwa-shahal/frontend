import React from "react";
import Classes from "./whoNeed.module.css";
import learningDisability2 from "../../assets/disability.jpeg";
import learningDisability1 from "../../assets/learningDisability.jpg";

const WhoNeed = () => {
  return (
    <div>
      <div className={Classes.WhoNeedSection}>
        <p className={Classes.WhoNeedTitle}>Who needs a Shadow Teacher ?</p>
        {/* <div className={Classes.WhoNeedWrapper}>
          <div className={Classes.WhoNeedImagesWrapper}>
            <img
              src={Autism}
              alt="adhd"
              className={Classes.WhoNeedImage1}
              width={"300px"}
              height={"400px"}
            />
            <img
              src={Autism}
              alt="autsim"
              className={Classes.WhoNeedImage2}
              width={"300px"}
              height={"400px"}
            />
          </div>
          <div>
            <div>
              <p>Children with Autism Spectrum Disorder (ASD)</p>
            </div>
            <div>
              <p>Children with Learning Disabilities (LD)</p>
            </div>
            <div>
              <p>
                Children with Attention Deficit Hyperactivity Disorder (ADHD)
              </p>
            </div>
          </div>
        </div> */}
        <div className={Classes["l-center"]}>
          <div className={Classes["l-container"]}>
            <div className={Classes["l-grid"]}>
              <div>
                <div
                  className={`${Classes["l-max"]} ${Classes["o-aspect-ratio"]}`}
                  data-padding="80"
                >
                  <div className={Classes["o-overlap-bottom"]}>
                    <div
                      className={`${Classes["o-aspect-ratio"]}`}
                      data-padding="66"
                    >
                      <img
                        className={Classes["o-aspect-ratio__media"]}
                        src={learningDisability1}
                        alt="Misty shroud over a forest"
                      />
                    </div>
                    {/* <div className={Classes["o-overlap-bottom__deco"]}></div> */}
                  </div>
                  <div className={Classes["o-overlap-top"]}>
                    <div
                      className={`${Classes["o-aspect-ratio"]}`}
                      data-padding="66"
                    >
                      <img
                        className={Classes["o-aspect-ratio__media"]}
                        src={learningDisability2}
                        alt="Plant in vase of water"
                      />
                    </div>
                    <div
                      className={`${Classes["o-overlap-top__deco"]} ${Classes["o-aspect-ratio"]}`}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className={Classes.whoNeedSection}>
                    <p className={Classes.whoNeedTitle}>
                      Children with Autism Spectrum Disorder (ASD)
                    </p>
                    <p className={Classes.whoNeedDescription}>
                      Children with ASD may struggle with social interactions,
                      communication, and sensory processing, making it
                      challenging for them to participate in a typical classroom
                      environment. A Shadow Teacher can provide the necessary
                      support to facilitate their learning and social
                      integration.
                    </p>
                  </div>
                  <div className={Classes.whoNeedSection}>
                    <p className={Classes.whoNeedTitle}>
                      Children with Learning Disabilities (LD)
                    </p>
                    <p className={Classes.whoNeedDescription}>
                      Children with LD may have difficulty with reading,
                      writing, or arithmetic, making it hard for them to keep up
                      with their peers. A Shadow Teacher can provide
                      personalized instruction and help them develop strategies
                      to overcome their challenges.
                    </p>
                  </div>
                  <div className={Classes.whoNeedSection}>
                    <p className={Classes.whoNeedTitle}>
                      Children with Attention Deficit Hyperactivity
                      Disorder(ADHD)
                    </p>
                    <p className={Classes.whoNeedDescription}>
                      Children with ADHD may struggle with focus, impulse
                      control, and hyperactivity, making it hard for them to
                      engage in classroom activities. A Shadow Teacher can help
                      them manage their behaviours and provide them with
                      individualized attention to facilitate their learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoNeed;
