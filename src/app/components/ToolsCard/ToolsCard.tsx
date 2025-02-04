import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import style from "./ToolsCard.module.css";
import Link from "next/link";

interface ITooldCardProps {
  name: string;
  icon: string;
  path: string;
}

export function ToolsCard(props: ITooldCardProps) {
  const { name, icon, path } = props;
  return (
    <Link href={path}>
      <Card className={style.container}>
        <CardContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3 className={style.title}>{name}</h3>
          <img src={icon} className={style.icon} />
        </CardContent>
      </Card>
    </Link>
  );
}
