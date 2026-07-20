import { Helmet } from "react-helmet-async";

export default function Movie() {
  return (
    <div>
      <Helmet>
        <PageTitle title={"Detail"} />
      </Helmet>
    </div>
  );
}
