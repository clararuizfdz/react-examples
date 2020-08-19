import React from "react";
import { MemberEntity } from "./model";
import { MemberRow } from "./member-row";
import { HeaderMember } from "./member-header";

const membersMock: MemberEntity[] = [
    {
        id: "1450103",
        login: "antonio06",
        avatar_url: "https://avatars1.githubusercontent.com/u/14540103?v=4"
    },
    {
        id: "1457912",
        login: "brauliodiez",
        avatar_url: "https://avatars1.githubusercontent.com/u/1457912?v=4"
    },
    {
        id: "24454225",
        login: "fjcalzado",
        avatar_url: "https://avatars1.githubusercontent.com/u/24454225?v=4"
    },
    {
        id: "13205689",
        login: "crsanti",
        avatar_url: "https://avatars1.githubusercontent.com/u/13205689?v=4"
    },
]

export const App: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);

    React.useEffect(() => {
        fetch(`https://api.github.com/orgs/lemoncode/members`)
            .then((response) => response.json())
            .then(json => setMembers(json));

    }, []);

    return (
        <table>
            <thead>
               <HeaderMember />
            </thead>
            <tbody>
                {members.map(member => (
                    <MemberRow key={member.id} member={member} />
                ))}
            </tbody>
        </table>
    );
}