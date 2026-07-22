export default function ModalButton({ onClick }: {onClick: () => void}) {
  return (
   <button onClick={onClick} className="bg-button-primary mb-5 w-fit pt-1 pb-1 pl-3 pr-3 border-2 font-body border-button-secondary text-xl text-panel rounded hover:bg-button-secondary active:translate-y-1">+ Add Plant</button>
  );
}
