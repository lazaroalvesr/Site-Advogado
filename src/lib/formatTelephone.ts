export const formatTelephone = (value: string | undefined) => {
    if (!value) return "";

    value = value.replace(/\D/g, '');
    value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    return value;
};