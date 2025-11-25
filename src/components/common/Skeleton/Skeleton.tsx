/**
 * 스켈레톤 로딩 컴포넌트
 */

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const variantClass = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }[variant];

  const animationClass = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: '',
  }[animation];

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      className={`bg-gray-200 ${variantClass} ${animationClass} ${className}`}
      style={style}
    />
  );
}

/**
 * 대학 카드 스켈레톤
 */
export function UniversityCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton variant="circular" width={60} height={60} />
        <div className="flex-1">
          <Skeleton width="60%" height={24} className="mb-2" />
          <Skeleton width="40%" height={16} />
        </div>
      </div>
      <Skeleton width="100%" height={40} />
    </div>
  );
}

/**
 * 학과 카드 스켈레톤
 */
export function DepartmentCardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <Skeleton width="50%" height={20} />
        <Skeleton width={60} height={24} />
      </div>
      <Skeleton width="30%" height={16} className="mb-2" />
      <Skeleton width="100%" height={8} className="mb-2" />
      <div className="flex gap-2">
        <Skeleton width={80} height={24} />
        <Skeleton width={80} height={24} />
      </div>
    </div>
  );
}

/**
 * 리스트 스켈레톤
 */
export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton variant="circular" width={48} height={48} />
          <div className="flex-1">
            <Skeleton width="70%" height={20} className="mb-2" />
            <Skeleton width="50%" height={16} />
          </div>
        </div>
      ))}
    </div>
  );
}

