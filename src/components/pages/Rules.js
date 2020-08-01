import React from "react";
import { Fade } from "react-reveal";
import Layout from "../Layout";
import RuleCard from "./RuleCard";
import "./rule.css";

const rules = [
  {
    title: "Ride on the Road",
    description:
      "Bicycles are legal traffic. They must be on the street with traffic and ride in the direction of traffic. If there is a bicycle path, you must use it and not ride on the street or road with traffic.",
  },
  {
    title: "Side-by-Side",
    description:
      "Riding side-by-side is forbidden on streets and roads. You must ride single file, even in bicycle lanes marked out on the streets. Exceptions are group of 16 or more cyclists in no more than two rows.",
  },
  {
    title: "Arm Signals",
    description:
      "You must give a hand signal for all turns. Point left with the left arm, and point right with the right arm to signal turns. The signal for stopping is one arm extended and the forearm pointing down using the arm most likely to be seen by the traffic.",
  },
  {
    title: "Yield",
    description:
      "If you are coming from a sidewalk, parking lot, driveway or the like, you must yield to all traffic on the priority roadway.",
  },
  {
    title: "Pedestrians",
    description: "Pedestrians always have the right of way.",
  },
  {
    title: "Children",
    description:
      "Children up to age 8 must ride on the sidewalk, not in traffic. Children up to age 10 are permitted to ride on the sidewalk.",
  },
  {
    title: "No Hands",
    description:
      "No-hands riding is forbidden. Maintain full control of your bicycle at all times.",
  },
  {
    title: "Carrying Items",
    description:
      "Carrying items on your bicycle that may cause an issue in traffic is forbidden. Such items include open umbrellas, saws, scythes, or other items that might cause damage or impaired maneuverability.",
  },
  {
    title: "Alcohol",
    description:
      "The rule “don’t drink and drive” also applies to riding a bicycle. If your blood alcohol exceeds the limits, you can be fined and can possibly lose your driver’s license. This also applies to riding while being intoxicated or on drugs.",
  },
  {
    title: "Mobile Phones",
    description:
      "It is prohibited to use a cell phone while riding a bicycle except when using a hands-free capability.",
  },
  {
    title: "Yield to the Right",
    description:
      "Be aware that in Germany, crossroads without traffic lights or signs follow the rule: “Right side before left side.” This rule counts in case there is no main road, mostly within city limits.",
  },
  {
    title: "Pedestrian Zones",
    description:
      "When riding in a pedestrian zone, you must push your bicycle if the pedestrian area restricts bicycles. If bicycles are allowed, you must ride at walking speed.",
  },
  {
    title: "Lights",
    description:
      "A non-blinking front headlamp of white or pale yellow color to illuminate the road and a red rear tail light that stays lit when stationary.",
  },
  {
    title: "Brakes",
    description: "Two independently acting braking devices are required.",
  },
  {
    title: "Reflectors",
    description:
      "A white reflector in the front and a red reflector in the rear. You must have at least two yellow reflectors on each wheel.",
  },

  {
    title: "Bell",
    description: "A bell is required.",
  },
  {
    title: "Helmets",
    description:
      "Helmets are not mandatory, but strongly recommended, as they protect against the risk of serious head or brain injuries. Some cities have adopted helmet laws for young children. Check with your local authorities to see if this applies in your area.",
  },
];

const renderRules = () => {
  return rules.map(({ title, description }, i) => {
    return (
      <Fade key={i}>
        <RuleCard title={title} description={description} />
      </Fade>
    );
  });
};

const Rules = () => {
  return (
    <Layout>
      <div className="rulesHeader">
        <h1>The Rules to Follow</h1>

        <p>
          It is very difficult to find a translated version of the bike laws in
          Berlin, however this list is quite accurate.
        </p>
      </div>
      <div className="rulesList">{renderRules()}</div>
    </Layout>
  );
};

export default Rules;
