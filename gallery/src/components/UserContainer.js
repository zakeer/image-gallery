import React from 'react';
import { User } from "./User";
import { users } from "../data"


export default function UserContainer() {
    return <section className="container">
    {
        [
            <User name="Parveen" job="Engineer" location="Hyderabad" />,
            <User name={users[0].name} job={users[0].job} location={users[0].location} />,
            <User name={users[1].name} job={users[1].job} location={users[1].location} />,
            <User name={users[2].name} job={users[2].job} location={users[2].location} />
        ]
    }
  </section>
}