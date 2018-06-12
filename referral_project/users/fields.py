from functools import partial

from django.db.models import IntegerField
from django.utils.translation import ugettext_lazy as _

from referral_project.utils.django.enums import IntEnumChoices


class ActivatedDeactivatedStatus(IntEnumChoices):
    DEACTIVATED = 0
    ACTIVATED = 1

    class Labels:
        DEACTIVATED = _("Deactivated")
        ACTIVATED = _("Activated")


ActivatedDeactivatedStatusField = partial(
    IntegerField,
    choices=ActivatedDeactivatedStatus.choices(),
    default=ActivatedDeactivatedStatus.DEACTIVATED,
)
