

interface Props {
    name: string;
    isPacked: boolean;
}

export default function ElementList({name, isPacked}:Props) {
    return <li>{isPacked ? name + "✅" : name}</li>
    /*if (isPacked)
    {
        return <li>{name} ✅</li>
    }

    return <li>{name}</li>*/
}
