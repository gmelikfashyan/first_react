interface Props {
    age: number;
}

export default function MyAge ({ age }: Props) {
    return <h1>MyAge: {age}</h1>
}