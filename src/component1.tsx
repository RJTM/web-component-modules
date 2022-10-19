import register from "https://unpkg.com/preact-custom-element?module";

function ComponentOne() {
  return <div>Component one</div>;
}

register(ComponentOne, "yld-one");
