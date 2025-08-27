export default function Reviews() {
  const reviews = [
    {
      title: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aliquam ac volutpat, viverra magna risus aliquam massa.",
    },
    {
      title: "Jane Smith",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aliquam ac volutpat, viverra magna risus aliquam massa.",
    },
    {
      title: "Alice Johnson",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aliquam ac volutpat, viverra magna risus aliquam massa.",
    },
    {
      title: "Bob Williams",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aliquam ac volutpat, viverra magna risus aliquam massa.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-16 mt-[-140px] bg-transparent">
      <div className="flex overflow-x-auto gap-4 px-4 md:px-0">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] md:w-[320px] p-6 bg-white rounded-xl border border-gray-100"
          >
            <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
            <p className="text-gray-600 mb-4">{review.content}</p>
            <span className="text-sm text-red-500 font-bold cursor-pointer">
              Experienced team
            </span>
          </div>
        ))}
      </div>
      {/* Optional arrows */}
      <div className="flex mt-4 gap-2">
        <button className="text-gray-400 hover:text-gray-800 cursor-pointer text-4xl">
          ←
        </button>
        <button className="text-gray-400 hover:text-gray-800 cursor-pointer text-4xl">
          →
        </button>
      </div>
    </div>
  );
}
