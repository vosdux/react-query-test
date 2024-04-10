import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: IndexComponent,
});

function IndexComponent () {
  return (
    <div>Home Page</div>
  )
}
