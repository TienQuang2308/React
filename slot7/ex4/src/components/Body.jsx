export default function Body() {
  return (
    <div className="text-center p-4">
      <section id="about" className="mb-4">
        <h4 className="fw-bold">About</h4>
        <p>This is the about section of the website.</p>
      </section>

      <section id="contact">
        <h4 className="fw-bold">Contact</h4>
        <p>
          For any inquiries, please contact us at{" "}
          <a href="mailto:example@example.com">example@example.com</a>.
        </p>
      </section>
    </div>
  );
}