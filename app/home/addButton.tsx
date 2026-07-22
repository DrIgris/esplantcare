export default function AddButton({ setVisible }: {setVisible: (v: boolean) => void}) {
  return (
   <button onClick={() => setVisible(true)} className="cursor-pointer bg-button-primary-desaturated w-fit p-2 border-2 font-body border-button-secondary text-2xl text-background rounded hover:bg-button-secondary active:translate-y-1 active:translate-x-1">+ Add Plant</button>
  );
}
