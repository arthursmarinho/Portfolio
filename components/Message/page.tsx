export default function Message() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-16 ">
      <div className="max-w-4xl text-center bg-gray-500/30 rounded-xl !mb-12">
        <h1 className="!text-4xl font-bold text-gray-800 leading-relaxed  ">
          Recrutador ou visualizador, como os projetos são hospedados em
          plataformas gratuitas, pode levar alguns segundos para carregar.
          <br className="hidden sm:block" />
          Como alguns projetos contém back-end, o projeto pode não funcionar
          corretamente quando você realizar alguma ação.
          <br />É necessário que você espere um pouco para que o back-end
          acorde.
        </h1>
      </div>
    </div>
  );
}
