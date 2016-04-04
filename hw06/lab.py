from string import uppercase, lowercase, digits

def minimum_threshold(password):
    """Possibly the LEAST memory efficient way to check a password."""
    upper = [c for c in password if c in uppercase]
    lower = [c for c in password if c in lowercase]
    digit = [c for c in password if c in digits]
    return bool(upper and lower and digit)

def strength_rating(password):
    upper = [c for c in password if c in uppercase]
    lower = [c for c in password if c in lowercase]
    digit = [c for c in password if c in digits]
    magic = [c for c in password if c in '.?!&#,;:-_*']
    s0 = min(3, min(len(upper), len(lower)))
    s1 = min(3, len(digit))
    s2 = min(3, len(magic))
    return 1 + s0 + s1 + s2
