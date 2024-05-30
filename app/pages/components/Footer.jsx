import React from "react";

function Footer() {
  return (
    <main className="bg-slate-900 text-white py-4 h-[50vh] grid grid-cols-3 gap-3 px-5">
      <section className="col-span-2 flex gap-12">
        <div>
          <p>Company</p>
          <ul className="text-xs">
            <li>
              <p>Contact</p>
            </li>
            <li>
              <p>
                About 
              </p>
            </li>
            <li>
              <p>Delivery</p>
            </li>
            <li><p>FAQs</p></li>
          </ul>
        </div>
        <div>
          <p>Products</p>
          <ul>
            <li>
              <p>Smart phones</p>
            </li>
            <li>
              <p>Decorations</p>
            </li>
            <li>
              <p>Laptops</p>
            </li>
          </ul>
        </div>
        <div>
          <p>Services</p>
        </div>
        <div>
          <p>Downloads</p>
        </div>
      </section>
      <section>second set</section>
    </main>
  );
}

export default Footer;
