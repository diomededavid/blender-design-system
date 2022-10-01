interface AvatarGroupProps {
  /**
   * Required Avatar Component
   */
  children?: React.ReactNode;
}
export const AvatarGroup = ({children}: AvatarGroupProps) => {
  return <div className="avatar-group -space-x-6">{children}</div>;
};

export default AvatarGroup;
