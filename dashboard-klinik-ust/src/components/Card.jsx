// Card component - akan dikembangkan lebih lanjut
const Card = ({ title, value, color = "blue" }) => {
  return (
    <div className={`bg-white rounded-xl shadow p-6 border-l-4 border-${color}-500`}>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
    </div>
  );
};

export default Card;
