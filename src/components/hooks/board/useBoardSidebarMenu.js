import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebarMenu } from '../../../redux/actions/board';

const useBoardSidebarMenu = () => {
  const { sidebarMenuOpen } = useSelector(({ board }) => board);
  const dispatch = useDispatch();
  const handleToggle = (display) =>
    display
      ? dispatch(toggleSidebarMenu(display))
      : dispatch(toggleSidebarMenu(!sidebarMenuOpen));

  return {
    isOpen: sidebarMenuOpen,
    handleToggle,
  };
};

export default useBoardSidebarMenu;
