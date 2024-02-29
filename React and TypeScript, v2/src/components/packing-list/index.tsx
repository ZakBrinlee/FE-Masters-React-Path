import Application from './components/application';
import ItemsProvider from "./context"

export const PackingListApplication = () => {
  return (
    <ItemsProvider>
      <Application />
    </ItemsProvider>
  )
}