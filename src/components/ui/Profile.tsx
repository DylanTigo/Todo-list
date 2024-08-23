import profile from "../../assets/images/profile.jpg"

type ProfileProps = {
  image?: string;
};

export default function Profile( {image}: ProfileProps) {
  return (
    <div><img src={image || profile} alt="profile" className="size-8 rounded-full" /></div>
  )
}
