import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";

import "../css/Timeline.css";
import Quotes from "./Quotes";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1("Step one");
    callback();
  };

  const someCallback2 = () => {
    setMessage2("Step two");
  };

  const someCallback3 = () => {
    setMessage3("Finish");
  };

  useEffect(() => {
    
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <div className="wrapper relative  flex flex-col mobile:items-center m-auto items-end justify-items-center LineRotate ">
      <div className="items-center  mobile:justify-normal flex flex-col bg-transparent FlipX">

     
      <div id="timeline1" ref={timeline1} className="timeline pc:absolute pc:invisible pc:rounded-lg pc:my-2" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle ">
          <p className="pc:rotate-90">1</p>
        </div>
        <div className="message pc:rotate-90">{message1?<Quotes ind={0}/>:""}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline  pc:rounded-lg pc:my-2" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle ">
          <p className="pc:rotate-90">2</p>
        </div>
        <div className="message pc:rotate-90">{message2?<Quotes ind={1}/>:""}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline  pc:rounded-lg pc:my-2" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle ">
          <p className="pc:rotate-90">3</p>
        </div>
        <div className="message pc:rotate-90">{message3?<Quotes ind={2}/>:""}</div>
      </div>
    </div>
    </div>
  );
};

export default function TimelineStep() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="pc:h-96" >
      {/* <h1>react-scroll-animation component</h1> */}
      <div className={`  mobile:absolute mobile:hidden stub1 ` }>.<p className="pc:absolute pc:hidden"> Quotes of the day. </p></div>
      <div className={`  pc:absolute pc:hidden Mstub1 ` }><p> Quotes of the day</p></div>
      <TimelineObserver
        initialColor="#ff05057e"
        fillColor="green"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline h-96 "
            setObserver={setObserver}
          />
        )}
      />
      {/* <div className="stub2">{message}</div> */}
    </div>
  );
}
