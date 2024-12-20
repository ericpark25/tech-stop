function AboutPage() {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-4 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
        Our
        <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
          story
        </span>
      </h1>
      <p className='mt-8 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        We started with one goal: to make the latest technology accessible to
        everyone. Whether you're upgrading your phone, enhancing your home
        office, or finding the perfect pair of headphones, we're here to help
        you save big while staying connected.
      </p>
      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        By focusing on unbeatable prices, quality products, and exceptional
        customer service, we strive to make tech shopping affordable and
        enjoyable. Join us in our mission to bring high-quality devices within
        reach for everyone, without breaking the bank.
      </p>
    </section>
  );
}
export default AboutPage;
