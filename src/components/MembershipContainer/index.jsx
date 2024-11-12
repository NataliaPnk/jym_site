import React, { useContext } from "react";
import s from "../MembershipContainer/index.module.css";
import { Context } from "../../context";
import MembershipCard from "../MembershipCard";

export default function MembershipContainer() {
  const { memberships } = useContext(Context);

  return (
    <div className="wrapper">
      <h2 className={s.titleMember}>Gym Membership Plans</h2>
      <div className={s.container}>
        {memberships.map((el) => (
          <MembershipCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
