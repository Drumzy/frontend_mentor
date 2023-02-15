import first_heading from "../../../assets/image-retro-pcs.jpg";
import second_heading from "../../../assets/image-top-laptops.jpg";
import third_heading from "../../../assets/image-gaming-growth.jpg";
export interface SpecialHeadingProps {
  ranking: number;
  title: string;
  description: string;
  img: string;
}

function SpecialHeading(props: SpecialHeadingProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 md:h-40 h-fit w-full">
      <img src={props.img} alt="" />
      <div className="flex flex-col justify-around md:justify-between">
        <span className=" text-gray-400 text-[26px] md:text-[40px] font-extrabold">
          {"0" + props.ranking}
        </span>
        <h4 className="text-lg md:text-xl font-extrabold hover:text-red-500">
          {props.title}
        </h4>
        <p className="text-gray-600 text-sm md:text-lg">{props.description}</p>
      </div>
    </div>
  );
}
const headings: SpecialHeadingProps[] = [
  {
    ranking: 1,
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    img: first_heading,
  },
  {
    ranking: 2,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets",
    img: second_heading,
  },
  {
    ranking: 3,
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh oppurtunities.",
    img: third_heading,
  },
];
function LastSection() {
  return (
    <div className="grid md:grid-cols-3 gap-5 w-full">
      {headings.map((heading) => (
        <SpecialHeading
          key={heading.ranking}
          title={heading.title}
          ranking={heading.ranking}
          description={heading.description}
          img={heading.img}
        />
      ))}
    </div>
  );
}

export default LastSection;
