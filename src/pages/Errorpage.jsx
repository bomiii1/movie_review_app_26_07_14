export default function Errorpage() {
  return (
    <div>
      <div className="min-h-screen flex gap-[-50px] flex-col items-center justify-center px-6">
        <p className="font-bold text-red-500 text-xl">BOM-MOVIE</p>
        <h1 className="font-bold text-[150px] mt-[-50px]">404</h1>
        <p className="text-[30px]">페이지를 찾을수 없습니다</p>
        <p className="opacity-50">
          요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
        </p>

        <button className="px-10 py-5 mt-8 rounded-xl hover:bg-red-700 bg-red-500">
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}
