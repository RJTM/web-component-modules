import register from "https://unpkg.com/preact-custom-element?module";

function ComponentTwo() {
  return <div>Component two</div>;
}

register(ComponentTwo, "yld-two");
